export const greetingMessage = () => {
  const currentTime = new Date().getHours();
  if (currentTime >= 5 && currentTime < 12) {
    return 'Good Morning';
  } else if (currentTime >= 12 && currentTime < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};
