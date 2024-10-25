import { Box, Heading, Text } from "@radix-ui/themes";

export default function NotFound() {
  return (
    <Box p={'9'} style={{textAlign: "center"}} >
      <Heading as="h1">404 - Page Not Found</Heading>
      <Text as="p">Sorry, the page you are looking for does not exist.</Text>
    </Box>
  );
}
