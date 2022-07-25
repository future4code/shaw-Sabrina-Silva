import { ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Router/coordinator";
import { ContainerHeader, Title } from "./styled";

const Header = ({ title , back }) => {

  const navigate = useNavigate()
  return (
   <ContainerHeader >
     {back && <ArrowBackIosNew onClick={() => goBack(navigate)} />}
      <Title>{title}</Title>
    </ContainerHeader>
  );
};

export default Header;
