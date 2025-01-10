import "./ProfilePage.scss";
import Header from "../../Components/Header/Header";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Footer from "../../Components/Footer/Footer";
import CommentForm from "../../Components/CommentForm/CommentForm";
import { useState } from "react";


function ProfilePage() {
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted comment:", newComment); 
    setNewComment({ name: "", comment: "" });
  };
  return (
    <div>
      <Header />
      <ProfileCard />
      <CommentForm
        newComment={newComment}
        setNewComment={setNewComment}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default ProfilePage;
