import "./CommentForm.scss";

export default function CommentForm({
	newComment,
	setNewComment,
	handleSubmit,
}) {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				value={newComment.name}
				onChange={(e) =>
					setNewComment((prev) => ({ ...prev, name: e.target.value }))
				}
				required
			/>

			<label htmlFor="comment">Reviews</label>
			<textarea
				id="comment"
				name="comment"
				rows="4"
				value={newComment.comment}
				onChange={(e) =>
					setNewComment((prev) => ({
						...prev,
						comment: e.target.value,
					}))
				}
				required
			></textarea>

			<button
				type="submit"
				disabled={!newComment.name || !newComment.comment}
			>
				Submit
			</button>
		</form>
	);
}
