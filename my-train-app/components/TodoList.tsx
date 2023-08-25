import { faTasks } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { View, StyleSheet, Pressable, TextInput, FlatList, ScrollView } from "react-native";
import { Input, Text, Button } from "@ui-kitten/components";
import { Divider } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash, faPenToSquare, faPlus, faPen } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (todo) {
      if (editIndex !== -1) {
        // Edit existing task
        const updatedTasks = [...todoList];
        updatedTasks[editIndex] = todo;
        setTodoList(updatedTasks);
        setEditIndex(-1);
      } else {
        // Add new task
        setTodoList([...todoList, todo]);
      }
      setTodo("");
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = todoList[index];
    setTodo(taskToEdit);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...todoList];
    updatedTasks.splice(index, 1);
    setTodoList(updatedTasks);
  };

  const renderItem = ({ item, index }) => (
    <>
      <View style={styles.listbox}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.todoTitle} category="s1">
            {item}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: 10,
            }}
          >
            <Button
              onPress={() => handleEditTask(index)}
              status="info"
              size="small"
              style={{ marginRight: 10 }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button
              onPress={() => handleDeleteTask(index)}
              status="danger"
              size="small"
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </View>
        </View>
      </View>
      <Divider />
    </>
  );

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <Input
          style={{ width: 280 }}
          placeholder="Enter task"
          value={todo}
          onChangeText={setTodo}
          size="large"
        />
        <Button onPress={handleAddTask} status="success">
          {editIndex !== -1 ? <FontAwesomeIcon icon={faPen}/> : <FontAwesomeIcon icon={faPlus} />}
        </Button>
      </View>

      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todoTitle: {
    margin: 10,
  },
  listbox: {
    borderWidth: 0.5,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "gray",
    paddingTop: 5,
    paddingBottom: 5
  },
});

export default TodoList;
