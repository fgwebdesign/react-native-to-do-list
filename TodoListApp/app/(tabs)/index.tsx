import React, { useState } from 'react';
import { StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { TodoInput } from '@/components/todo/TodoInput';
import { TodoList } from '@/components/todo/TodoList';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

// Definimos la interfaz Todo
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export default function HomeScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      title,
      completed: false,
      createdAt: new Date()
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const pendingTodos = todos.filter(todo => !todo.completed).length;

  return (
    <SafeAreaView style={[
      styles.container,
      isDark && styles.containerDark
    ]}>
      <ThemedView style={styles.header}>
        <ThemedView style={styles.headerContent}>
          <ThemedView style={styles.headerLeft}>
            <ThemedText style={[styles.title, isDark && styles.titleDark]}>
              Mis Tareas
            </ThemedText>
            <ThemedView style={styles.badge}>
              <ThemedText style={styles.badgeText}>
                {pendingTodos} pendientes
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <TouchableOpacity 
            style={[
              styles.themeToggle,
              { backgroundColor: isDark ? '#374151' : '#F1F5F9' }
            ]}
          >
            <Ionicons 
              name={isDark ? "moon" : "sunny"} 
              size={24} 
              color={isDark ? "#FCD34D" : "#F59E0B"}
            />
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      <TodoInput onSubmit={addTodo} isDark={isDark} />

      {todos.length === 0 ? (
        <ThemedView style={styles.emptyState}>
          <Ionicons 
            name="clipboard-outline" 
            size={64} 
            color={isDark ? "#4B5563" : "#9CA3AF"}
          />
          <ThemedText style={[
            styles.emptyStateText,
            isDark && { color: '#9CA3AF' }
          ]}>
            ¡No hay tareas! Agrega una nueva tarea para comenzar.
          </ThemedText>
        </ThemedView>
      ) : (
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          isDark={isDark}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  containerDark: {
    backgroundColor: '#111827',
  },
  header: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1E293B',
    letterSpacing: -1,
  },
  titleDark: {
    color: '#F3F4F6',
  },
  badge: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    shadowColor: '#3B82F6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  themeToggle: {
    padding: 8,
    borderRadius: 999,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 16,
  },
  emptyStateText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
});
