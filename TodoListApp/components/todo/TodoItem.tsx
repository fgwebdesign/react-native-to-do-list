import React from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Todo } from '../../app/types/todos';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { FadeInDown } from 'react-native-reanimated';

interface TodoItemProps {   
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  isDark?: boolean;
}

export function TodoItem({ todo, onToggle, onDelete, isDark }: TodoItemProps) {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)}
      style={[
        styles.container,
        isDark && styles.containerDark
      ]}
    >
      <TouchableOpacity 
        style={styles.todoContent}
        onPress={() => onToggle(todo.id)}
      >
        <TouchableOpacity 
          onPress={() => onToggle(todo.id)}
          style={styles.checkboxContainer}
        >
          {todo.completed ? (
            <Ionicons name="checkmark-circle" size={24} color="#10B981" />
          ) : (
            <Ionicons name="ellipse-outline" size={24} color="#94A3B8" />
          )}
        </TouchableOpacity>
        
        <ThemedText style={[
          styles.title,
          todo.completed && styles.completedText,
          isDark && styles.titleDark
        ]}>
          {todo.title}
        </ThemedText>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => onDelete(todo.id)}
        style={styles.deleteButton}
      >
        <Ionicons name="trash-outline" size={20} color="#EF4444" />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  containerDark: {
    backgroundColor: '#1F2937',
    borderColor: '#374151',
  },
  todoContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '500',
  },
  titleDark: {
    color: '#F3F4F6',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#94A3B8',
  },
  deleteButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FEE2E2',
  },
});