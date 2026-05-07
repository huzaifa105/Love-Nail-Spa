import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Bookings
  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = req.body;
      console.log("New Booking Received:", bookingData);
      
      // In a real app, you'd save this to a database (e.g., Firestore)
      // For now, we simulate success
      res.status(201).json({ 
        message: "Booking received successfully!",
        bookingId: Math.random().toString(36).substr(2, 9)
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to process booking" });
    }
  });

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = req.body;
      console.log("New Contact Message:", contactData);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error("Error starting server:", err);
});
