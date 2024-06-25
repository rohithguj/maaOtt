"use client";
// SignUpForm.js

// SignUpForm.tsx

import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig"; // Adjust path as per your project structure
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore"; // Import necessary Firestore functions
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Toggle from "../components/Toggle";
import { useAppStore } from "../useAppStore";
import { useRouter } from "next/navigation";

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [isCollaborator, setIsCollaborator] = useState(false);

  const [setLoggedin, referal, redirectUrl, setRedirect] = useAppStore((s) => [
    s.setLoggedin,
    s.referral,
    s.redirect,
    s.setRedirect,
  ]);

  const router = useRouter();
  const handlePostSignup = () => {
    setLoggedin(true);
    redirectUrl ? router.push(redirectUrl as string) : router.push("./");
    setRedirect(null);
  };

  const [flag, setFlag] = useState(false);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Create user with email/password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      handleAdditionalDetails();
      handlePostSignup();

      if (userCredential.user) {
        // If user is successfully created, prompt for additional details
        setName(userCredential.user.displayName || ""); // Example: set name if available
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleAdditionalDetails = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        // Update user profile with additional details
        await setDoc( 
          doc(db, "users", user.uid),
          {
            name,
            phoneNumber,
            city,
            pin,
            createdAt: new Date(),
            lastUpdatedAt: new Date(),
            isCollaborator, // Set initial value for isCollaborator
            referal: referal,
            uid: user.uid,
            // Add other relevant fields here
          },
          { merge: true }
        );
        console.log("User details updated successfully!");
        // Redirect or show success message
      } else {
        throw new Error("User not authenticated");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Sign in with Google
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        // If Google sign-in is successful, prompt for additional details
        setName(result.user.displayName || ""); // Example: set name if available
      }
      handleAdditionalDetails();
      handlePostSignup;
    } catch (err: any) {
      setError(err.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleFLag = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    setFlag(!flag); // Toggle the flag state
  };

  const toggleCollaborator = () => {
    setIsCollaborator(!isCollaborator);
  };

  const handleUnregisteredUser = async () => {
    try {
      // Check if a document with the same phone number already exists
      const q = query(
        collection(db, "unregistered_users"),
        where("phoneNumber", "==", phoneNumber)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // If a document with the same phone number is found, throw an error
        throw new Error("A user with this phone number already exists.");
      }

      // Generate a random ID for the unregistered user
      const unregisteredUserId = Math.random().toString(36).substr(2, 9);

      // Write user details to the 'unregistered_users' collection
      await setDoc(doc(db, "unregistered_users", unregisteredUserId), {
        name,
        phoneNumber,
        city,
        pin,
        createdAt: new Date(),
        lastUpdatedAt: new Date(),
        isCollaborator, // Set initial value for isCollaborator
        referal,
        uid: unregisteredUserId,
        // Add other relevant fields here
      });

      console.log("Unregistered user details saved successfully!");

      router.push("./");
      setRedirect(null);
      // Redirect or show success message
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl text-gray-600 font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {/* Sign up form */}
        {/* Additional details form */}
        {!flag && (
          <form onSubmit={toggleFLag}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700 text-gray-600"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700 text-gray-600"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                City
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700 text-gray-600"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                PIN Code
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700 text-gray-600"
                placeholder="Enter your PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <Toggle isOn={isCollaborator} toggle={toggleCollaborator} />
              <span className="text-sm font-semibold text-gray-600 mx-1 items-center">
                Join as collaborator?
              </span>
              <Link
                href="colabintro"
                target="_blank"
                className="text-blue-500 hover:underline items-center"
              >
                Learn More
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mb-4"
            >
              Next
            </button>
          </form>
        )}
        {flag && (
          <div>
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700 text-gray-600"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700 text-gray-600"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 py-2"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon
                      color="gray"
                      icon={showPassword ? faEyeSlash : faEye}
                    />
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mb-4"
                onClick={() => {
                  setFlag(!flag);
                }}
              >
                Back
              </button>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mb-4"
              >
                Sign Up
              </button>
            </form>

            {/* Sign up with Google button */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-white border border-gray-300 text-gray-600 p-2 rounded-md flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:shadow-outline mb-4"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Sign Up with Google
            </button>

            <button
              onClick={handleUnregisteredUser}
              className="w-full bg-white border border-gray-300 text-gray-600 p-2 rounded-md flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:shadow-outline mb-4"
            >
              Don&apost;t Have a Email?
            </button>
          </div>
        )}
        <div className="pt-2 text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            href={`/login?redirect=${encodeURIComponent(
              redirectUrl as string
            )}`}
          >
            <span className="text-blue-500 hover:underline">Log In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
