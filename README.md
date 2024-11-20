Here’s your polished `README.md` file:

---

# **WildPursuit**

A responsive eco-adventure experience blog designed to showcase eco-friendly travel adventures like mountain treks, ocean dives, and more. The application promotes sustainable tourism and enhances user engagement by providing a platform to browse, explore, and learn about eco-adventures while offering features like user authentication, profile updates, and consultation.

## **Live Project**

🔗 [WildPursuit Live](https://toha-a9.web.app)

---

## **Purpose**

WildPursuit is dedicated to promoting eco-friendly travel adventures and fostering awareness about sustainable tourism. It offers users detailed information about various adventures, allowing them to engage, plan, and enjoy environmentally conscious experiences.

---

## **Key Features**

### **General Features**

- **Winter-Themed Design**: A unique, division-focused winter design tailored for eco-tourism.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Dynamic Title Updates**: Each page updates its title dynamically without requiring additional libraries.
- **Error Handling**: Includes a 404 error page with a button to return to the home route.

### **Authentication**

- Firebase Authentication for:
  - Email/Password Sign-In.
  - Google Login.
- Seamless navigation for logged-in users even after reloading private routes.

### **Homepage**

- **Banner Section**: Interactive slider implemented using Daisy UI and animations (AOS and Animate.css).
- **Adventure Experiences Section**: Dynamic cards showcasing adventure data with essential details and a "Explore Now" button.
- **Additional Sections**: Includes testimonials and other custom-designed sections to enrich the user experience.

### **Adventure Details**

- **Private Route**: Detailed adventure pages include all required data, designed with user interaction in mind.
- **Expert Consultation**:
  - Opens a Google Meet link during consultation hours (10:00 AM - 8:00 PM).
  - Displays a modal with consultation time if accessed outside consultation hours.

### **User Profiles**

- **My Profile**: Displays user profile information with an option to update the profile.
- **Update Profile**:
  - Users can update their name and photo URL directly.
  - Changes are synchronized with Firebase.

---

## **Data**

The adventure data is dynamically rendered from a JSON file with the following structure:

- **Fields**: Adventure Title, Image, ID, Category, Short Description, Cost, Location, Duration, Adventure Level, Included Items, Eco-Friendly Features, Max Group Size, Special Instructions, and Booking Availability.
- **Total Adventures**: 12

---

## **Technologies & Tools**

### **Frameworks & Libraries**

- **React**: For building the user interface.
- **React Router**: For managing routes and navigation.
- **Firebase**: For backend services, including authentication and hosting.
- **Daisy UI**: For streamlined styling.
- **AOS & Animate.css**: For stunning animations on key sections.
- **React Hot Toast**: For real-time notifications.

### **Hosting**

- Hosted on **Firebase** for seamless deployment.

---

## **Packages Used**

- `react-hot-toast`
- `AOS`
- `animate.css`

---
