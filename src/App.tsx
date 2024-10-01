import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./routes/routes";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
