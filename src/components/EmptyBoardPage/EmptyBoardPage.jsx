import { useSelector } from "react-redux";

export const EmptyBoardPage = () => {

  const d = useSelector(state => state)
  console.log('d :>> ', d);
  return (
    <p>
      Before starting your project, it is essential to create a board to
      visualize and track all the necessary tasks and milestones. This board
      serves as a powerful tool to organize the workflow and ensure effective
      collaboration among team members.
    </p>
  );
};
