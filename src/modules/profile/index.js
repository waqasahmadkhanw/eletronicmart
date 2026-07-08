import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";

import ProfileHeader from "./components/ProfileHeader";
import ProfileCard from "./components/ProfileCard";
import ProfileForm from "./components/ProfileForm";
import AvatarUpload from "./components/AvatarUpload";
import ProfileTabs from "./components/ProfileTabs";

import useProfile from "./hooks/useProfile";
import useUpdateProfile from "./hooks/useUpdateProfile";
import useAvatarUpload from "./hooks/useAvatarUpload";

import profileSchema from "./validators/profileSchema";
import passwordSchema from "./validators/passwordSchema";

import profileReducer from "./store/profileSlice";

export {
  // pages
  Profile,
  EditProfile,
  ChangePassword,

  // components
  ProfileHeader,
  ProfileCard,
  ProfileForm,
  AvatarUpload,
  ProfileTabs,

  // hooks
  useProfile,
  useUpdateProfile,
  useAvatarUpload,

  // validators
  profileSchema,
  passwordSchema,

  // redux
  profileReducer,
};

export default {
  Profile,
  EditProfile,
  ChangePassword,
};