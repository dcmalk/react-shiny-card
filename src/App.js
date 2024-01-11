import React from 'react';
import styled from 'styled-components';
import coverImage from './assets/card-image.jpg';
import avatarImage from './assets/card-avatar.jpg';

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #121212; /* Dark background for the container */
  color: #fff; /* Light text color */
`;

const Card = styled.div`
  width: 300px;
  border: 1px solid #333; /* Darker border for the card */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Adjusted shadow for dark mode */
  background-color: #1e1e1e; /* Dark background for the card */
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin: 10px 0;
  color: #fff; /* Light text color */
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #333; /* Darker divider */
  margin: 10px 0;
`;

const Subtitle = styled.h3`
  margin: 5px 0;
  color: #ccc; /* Slightly lighter text color for contrast */
`;

const Text = styled.p`
  color: #aaa; /* Lighter text color */
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const AuthorAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.span`
  font-weight: bold;
  color: #fff; /* Light text color */
`;

function App() {
  return (
    <Container>
      <Card>
        <CardImage src={coverImage} alt="Card Image" />
        <CardContent>
          <Title>Card Title</Title>
          <Divider />
          <Subtitle>Card Subtitle</Subtitle>
          <Text>This is the card text. It can be longer and wrap across multiple lines.</Text>
          <Author>
            <AuthorAvatar src={avatarImage} alt="Author" />
            <AuthorName>Author Name</AuthorName>
          </Author>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
