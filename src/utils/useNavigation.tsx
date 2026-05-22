import { useNavigate } from "react-router";

function useNavigation() {
  const navigate = useNavigate();

  function handleClick(route: string) {
    navigate(route);
  }

  return handleClick;
}

export default useNavigation;
