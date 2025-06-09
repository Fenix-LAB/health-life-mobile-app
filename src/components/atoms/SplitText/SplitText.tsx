import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';

type SplitTextProps = {
  text: string;
  delay?: number;
  duration?: number;
  ease?: string; // No se usa directamente en Moti, pero lo incluimos por compatibilidad
  splitType?: 'chars' | 'words';
  from?: object;
  to?: object;
  textAlign?: 'left' | 'center' | 'right';
  className?: string; // Opcional, por si quieres usar tailwind-rn u otras libs
  onLetterAnimationComplete?: () => void;
};

const SplitText: React.FC<SplitTextProps> = ({
  text,
  delay = 100,
  duration = 0.6,
  splitType = 'chars',
  from = { opacity: 0, translateY: 20 },
  to = { opacity: 1, translateY: 0 },
  textAlign = 'left',
  onLetterAnimationComplete,
}) => {
  const units = splitType === 'words' ? text.split(' ') : text.split('');

  useEffect(() => {
    // Esperamos el total de la animación para disparar callback
    const timeout = setTimeout(() => {
      onLetterAnimationComplete?.();
    }, delay * units.length + duration * 1000);

    return () => clearTimeout(timeout);
  }, [units.length, delay, duration, onLetterAnimationComplete]);

  return (
    <View style={[styles.container, { justifyContent: getAlignment(textAlign) }]}>
      {units.map((char, index) => (
        <MotiView
          key={`${char}-${index}`}
          from={from}
          animate={to}
          transition={{
            delay: index * delay,
            type: 'timing',
            duration: duration * 1000,
          }}
        >
          <Text style={styles.char}>{char === ' ' ? '\u00A0' : char}</Text>
        </MotiView>
      ))}
    </View>
  );
};

const getAlignment = (align: string) => {
  switch (align) {
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      return 'flex-start';
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  char: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
  },
});

export default SplitText;
