interface ITodo {
  _id: string;
  task: string;
  completed: boolean;
}

type TodoProps = {
  todo: ITodo;
};

type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};

interface ITeam {
  name: string;
  image: string;
}
