import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProfilePage.scss";
import Header from "../../Components/Header/Header";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Footer from "../../Components/Footer/Footer";
import CommentForm from "../../Components/CommentForm/CommentForm";

function ProfilePage() {
  const { id: advisorId } = useParams(); 
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const [comments, setComments] = useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/advisors/${advisorId}/comments`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError("Failed to load comments.");
      }
    };

    fetchComments();
  }, [advisorId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newCommentData = {
      name: newComment.name,
      comment: newComment.comment,
      date: new Date().toISOString(), 
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/advisors/${advisorId}/comments`,
        newCommentData
      );

      console.log("Comment submitted successfully:", response.data);

      setComments(response.data);

      setNewComment({ name: "", comment: "" });
    } catch (error) {
      console.error("Error submitting comment:", error);
      setError("Failed to submit comment.");
    }
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
      {error && <p className="error">{error}</p>}
      <ul className="comments-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comments-list__item">
            <strong>{comment.name}:</strong> {comment.comment}
            <br />
            <small>{new Date(comment.date).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfilePage;