import { Button, TextField, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import "./styles.css";

const PostsPage = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  return (
    <div className="page">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([...todos, todo]);
          setTodo("");
        }}
      >
        <TextField
          fullWidth
          placeholder="write todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          data-cy="todo-input"
        />
        <Button
          disabled={todo.trim().length === 0}
          variant="contained"
          type="submit"
          data-cy="todo-submit"
        >
          save
        </Button>
      </form>
      <ul>
        {todos.map((t, i) => (
          <ListItemButton key={t} data-cy={`todo-item-${i}`}>
            <ListItemText>{t}</ListItemText>
          </ListItemButton>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
