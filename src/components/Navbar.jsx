/* src/components/Navbar.css */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(2, 11, 4, 0.85); /* Semi-transparent dark green */
  backdrop-filter: blur(10px); /* Glass effect */
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 255, 65, 0.1);
}

.nav-logo {
  color: white;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 1px;
  border: 2px solid white;
  padding: 5px 10px;
  border-radius: 50%;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #a0aec0;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #00ff41; /* Green highlight on hover */
}

/* --- MOBILE NAVBAR FIX --- */
@media screen and (max-width: 768px) {
  /* 1. Allow the navbar to grow tall */
  .navbar {
    flex-direction: column;
    padding: 1rem 0;
    height: auto;
  }

  /* 2. Show the links and stack them */
  .nav-links {
    display: flex; /* Make sure they are VISIBLE */
    flex-direction: column; /* Stack them vertically */
    margin-top: 1rem;
    width: 100%;
    align-items: center;
    gap: 1rem;
  }

  /* 3. Bigger touch targets */
  .nav-links a {
    font-size: 1rem;
    padding: 0.5rem;
    display: block;
  }
}