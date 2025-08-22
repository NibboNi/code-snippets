interface CommentProps {
  comment: string;
}

function Comment({ comment }: CommentProps) {
  return <p className="text-sm italic font-medium">{comment}</p>;
}

export default Comment;
