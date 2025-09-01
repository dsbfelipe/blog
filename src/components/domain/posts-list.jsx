import PostItem from "./post-item";

const PostsList = ({ posts }) => {
  return (
    <div className="mt-8">
      {posts.map((post) => (
        <PostItem
          key={post.title}
          title={post.title}
          category={post.category}
          date={post.date}
          image={post.image}
          tags={post.tags}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default PostsList;
