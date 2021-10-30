import GithubTable from "../components/github/GithubTable";
import { Box } from "@primer/components";

const Developers = () => {
  return (
    <Box mt={6}>
      <GithubTable type="developers" />
    </Box>
  );
};

export default Developers;
