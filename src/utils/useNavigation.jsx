import { useNavigate } from "react-router";

function useNavigation() {
  const navigate = useNavigate();

  function handleClick(route) {
    navigate(route);
  }

  return handleClick;
}

export default useNavigation;
