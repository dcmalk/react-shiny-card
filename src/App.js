import React from 'react';
import styled from 'styled-components';
import coverImage from './assets/card-image.jpg';
import avatarImage from './assets/card-avatar.jpg';

// Styled components
const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #ddd;
  margin: 10px 0;
`;

const Subtitle = styled.h3`
  margin: 5px 0;
`;

const Text = styled.p`
  color: #666;
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
`;

function App() {
  return (
    <Card>
      <CardImage src={coverImage} alt="Card Image" />
      <Title>Card Title</Title>
      <Divider />
      <Subtitle>Card Subtitle</Subtitle>
      <Text>This is the card text. It can be longer and wrap across multiple lines.</Text>
      <Author>
        <AuthorAvatar src={avatarImage} alt="Author" />
        <AuthorName>Author Name</AuthorName>
      </Author>
    </Card>
  );
}

export default App;
