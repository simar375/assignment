import "./Profile.css";

interface ProfileProps {
  imageUrl: string;
  bio: string;
}
const Profile: React.FC<ProfileProps> = ({ imageUrl, bio }) => {
  return (
    <div className="profile-container">
      <img src={imageUrl} alt="profile" className="profile-picture" />
      <p className="bio-text">{bio}</p>
    </div>
  );
};

export default Profile;
