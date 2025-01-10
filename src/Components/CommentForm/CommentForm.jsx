import "./CommentForm.scss";

export default function CommentForm({
	newComment,
	setNewComment,
	handleSubmit,
}) {
	return (
		<form className="comment-form" onSubmit={handleSubmit}>
			<label htmlFor="name" className="comment-form__label">
				Name
			</label>
			<input
				type="text"
				id="name"
				name="name"
				value={newComment.name}
				onChange={(e) =>
					setNewComment((prev) => ({ ...prev, name: e.target.value }))
				}
				className="comment-form__input"
				required
			/>
			<label htmlFor="comment" className="comment-form__label">
				Comment
			</label>
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
				className="comment-form__textarea"
				required
			></textarea>
			<button type="submit" className="comment-form__submit">
				Submit
			</button>
		</form>
	);
}
