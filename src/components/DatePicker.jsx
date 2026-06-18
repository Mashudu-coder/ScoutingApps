import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerField = ({ label, value, onChange, error }) => {
  const [show, setShow] = useState(false);

  const handleChange = (event, selectedDate) => {
    if (Platform.OS === 'android') setShow(false);
    if (event.type === 'dismissed') return;
    if (selectedDate) onChange(selectedDate);
  };

  const formatDate = (date) => {
    if (!date) return 'Select date of birth';
    return date.toLocaleDateString('en-ZA', {
      day: '2-digit', month: 'long', year: 'numeric',
    });
  };

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity
        style={[styles.field, error && styles.fieldError]}
        onPress={() => setShow(true)}
        activeOpacity={0.7}
      >
        <Text style={[styles.value, !value && styles.placeholder]}>
          {formatDate(value)}
        </Text>
      </TouchableOpacity>

      {error && <Text style={styles.error}>{error}</Text>}

      {show && (
        <DateTimePicker
          value={value || new Date(2000, 0, 1)}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          maximumDate={new Date()}
          minimumDate={new Date(1900, 0, 1)}
          onChange={handleChange}
        />
      )}

      {show && Platform.OS === 'ios' && (
        <TouchableOpacity style={styles.confirm} onPress={() => setShow(false)}>
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: 12 },
  label: { fontSize: 14, marginBottom: 6, color: '#333', left: 7 },
  field: {
    width: '82%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#777c837a',
    fontSize: 16,
    marginBottom: 12,
  },
  value:       { fontSize: 16, color: '#111' },
  placeholder: { color: 'black' },
  error:       { fontSize: 12, color: '#e74c3c', marginTop: 4 },
  confirm:     { alignSelf: 'flex-end', paddingVertical: 8, paddingHorizontal: 16 },
  confirmText: { color: '#007AFF', fontWeight: '600', fontSize: 15 },
});

export default DatePickerField;