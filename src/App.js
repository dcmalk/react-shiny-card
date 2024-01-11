import React from 'react';
import styled from 'styled-components';
import coverImage from './assets/card-image.jpg';
import avatarImage from './assets/card-avatar.jpg';
import backgroundImage from './assets/card-background.jpg';

// Styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: #fff;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.5), 0px 30px 60px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 16px 0 10px 0;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
  margin: 10px 0;
`;

const Subtitle = styled.h3`
  margin: 0 0 8px;
  color: #ccc;
  font-size: 15px;
  font-weight: 500;
`;

const Text = styled.p`
  color: #aaa;
  font-size: 13px;
  line-height: 24px;
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
  color: #fff;
  font-size: 12px;
  font-weight: 500;
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
