import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Todo } from '../../app/types/todos';
import { TodoItem } from './TodoItem';
import { ThemedView } from '../ThemedView';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
});