// crt-terminal/packages/crt-terminal/src/hooks/terminal/useCommandScreen.ts

import { usePrinter, PrinterProps } from './usePrinter';

type CommandScreenReturnType = ReturnType<typeof useCommandScreen>;

interface CommandScreenProps {
  printerConfig: PrinterProps;
  onLineComplete?: () => void; // CV
}

function useCommandScreen({
  printerConfig,
  onLineComplete, // CV
}: CommandScreenProps) {
  const {
    state,
    handlers: { startPrint, clear },
  } = usePrinter({
    ...printerConfig,
    onLineComplete, // CV
  });

  return {
    state,
    handlers: {
      print: startPrint,
      clear,
    },
  };
}

export type { CommandScreenReturnType };
export { useCommandScreen };
