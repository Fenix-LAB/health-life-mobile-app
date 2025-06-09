import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MotiView } from 'moti';

/**
 * AnimatedBox component that animates its appearance using Moti.
 * It scales from 0.5 to 1 and fades in from opacity 0 to 1.
 * 
 * It's a simple example of how to use Moti for animations in React Native.
 */

const AnimatedBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'timing', duration: 800 }}
        style={styles.box}
      />
    </View>
  );
};

export default AnimatedBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: '#4f46e5',
    borderRadius: 12,
  },
});
