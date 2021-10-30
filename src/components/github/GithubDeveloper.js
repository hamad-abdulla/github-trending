import {
  Box,
  Link,
  StyledOcticon,
  Text,
  Button,
  Avatar,
} from "@primer/components";
import { FlameIcon, RepoIcon } from "@primer/octicons-react";

const GithubDeveloper = ({ index, value }) => {
  return (
    <Box
      p={2}
      display="flex"
      borderWidth={1}
      borderStyle="solid"
      borderColor="border.muted"
      borderTopWidth={0}
      color="fg.muted"
    >
      <Box className="col-6" display="flex" my={2}>
        <Text
          className="hide-sm"
          ml={2}
          mr={5}
          my={2}
          mr-md={1}
          fontSize="small"
        >
          {index}
        </Text>
        <Link href={value.url} target="_blank">
          <Avatar mr={2} alt={value.username} size={50} src={value.avatar} />
        </Link>

        <Box ml={2}>
          <Link href={value.url} target="_blank">
            <Text as="h3" my={0}>
              {value.author}
            </Text>
          </Link>
          <Text>{value.username}</Text>
        </Box>
      </Box>
      <Box className="col-5">
        <Box display="block" mb={1}>
          <StyledOcticon
            icon={FlameIcon}
            mr={2}
            color="severe.fg"
          ></StyledOcticon>
          <Text fontSize="small">POPULAR REPO</Text>
        </Box>
        <Box display="block">
          <StyledOcticon icon={RepoIcon} mr={2} />
          <Link
            href={value.repourl}
            target="_blank"
            fontSize={2}
            fontWeight="bold"
          >
            {value.reponame}
          </Link>
        </Box>
        <Box display="block">
          <Text fontSize="small">{value.description}</Text>
        </Box>
      </Box>
      <Box
        className="col-4 hide-sm"
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="space-between"
        p={2}
      >
        <Button variant="small">Follow</Button>
      </Box>
    </Box>
  );
};

export default GithubDeveloper;
