import {
  Box,
  Link,
  StyledOcticon,
  Text,
  Button,
  Avatar,
} from "@primer/components";
import { RepoIcon, StarIcon, RepoForkedIcon } from "@primer/octicons-react";

const GithubRepository = ({ value }) => {
  return (
    <Box
      borderWidth={1}
      borderStyle="solid"
      borderColor="border.muted"
      borderTopWidth={0}
    >
      <Box padding={3} display="flex">
        <Box className="col-12 col-md-8">
          <StyledOcticon icon={RepoIcon} mr={2} />
          <Link fontSize={3} marginTop={0} href={value.repourl} target="_blank">
            {value.author} /{" "}
          </Link>
          <Link
            fontSize={3}
            fontWeight="bold"
            href={value.repourl}
            target="_blank"
          >
            {value.reponame}
          </Link>
          <Text mt={1} mb={2} as="p" color="fg.muted">
            {value.repodesc}
          </Text>
          <Box fontSize="small" color="fg.muted">
            {value.language ? <Text mr={3}>{value.language}</Text> : ""}

            <Link href={value.repourl} target="_blank" color="fg.muted" mr={3}>
              <StyledOcticon icon={StarIcon} mr={1} />
              {value.stars}
            </Link>
            <Link href={value.repourl} target="_blank" color="fg.muted" mr={3}>
              <StyledOcticon icon={RepoForkedIcon} mr={1} />
              {value.forks}
            </Link>
            <Box
              display="inline-block"
              className="my-2 my-sm-0"
              alignContent="center"
            ></Box>
            <Text mr={2}>Built by</Text>
            {value.builtby.map((m) => (
              <Link key={m.username} href={m.url} target="_blank">
                <Avatar
                  mb={1}
                  mr={1}
                  alt={m.username}
                  src={m.avatar}
                  size="20"
                />
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          className="col-0 col-md-4 hide-sm"
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Box>
            <Button>
              <StyledOcticon icon={StarIcon} mr={2} />
              Star
            </Button>
          </Box>
          <Box fontSize="small" color="fg.muted">
            <StyledOcticon icon={StarIcon} mr={1} />
            {value.laststars} stars today
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GithubRepository;
