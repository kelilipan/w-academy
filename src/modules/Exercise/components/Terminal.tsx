import React from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";
const Terminal = () => {
  const commands = {
    whoami: "wisesa-dev",
  };
  return (
    <TerminalContextProvider>
      <ReactTerminal
        welcomeMessage={
          <>
            Try `whoami` or `clear`.
            <br />
          </>
        }
        commands={commands}
        theme="material-dark"
        showControlBar={false}
        errorMessage="Command not found."
      />
    </TerminalContextProvider>
  );
};

export default Terminal;
