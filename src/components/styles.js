export const styles = {
  chatWithMeButton: {
    cursor: "pointer",
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    // Border
    borderRadius: "50%",
    // Background
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "84px",
    // Size
    width: "68px",
    height: "68px",
    padding: "30px",
    backgroundColor: "#fff",
  },
  avatarHello: {
    // Position
    position: "absolute",
    left: "calc(-100% - 44px - 85px)",
    top: "calc(50% - 24px)",
    // Layering
    zIndex: "10000",
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    // Border
    padding: "12px 12px 12px 16px",
    borderRadius: "16px 0px 24px 16px",
    // Color
    backgroundColor: "#dae0f7",
    color: "black",
  },
  supportWindow: {
    // Default styles for all screen sizes
    position: "fixed",
    bottom: "116px",
    right: "24px",
    width: "370px",
    height: "500px",
    maxWidth: "calc(100% - 48px)",
    maxHeight: "calc(100% - 48px)",
    backgroundColor: "white",
    overflow: "hidden",
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    borderRadius: "1.5rem",
  },
  emailFormWindow: {
    width: "100%",
    overflow: "hidden",
    transition: "all 0.5s ease",
    WebkitTransition: "all 0.5s ease",
    MozTransition: "all 0.5s ease",
  },
  stripe: {
    position: "relative",
    top: "-45px",
    width: "100%",
    height: "308px",
    backgroundColor: "#7a39e0",
    transform: "skewY(-12deg)",
  },
  topText: {
    position: "relative",
    width: "100%",
    top: "15%",
    color: "white",
    fontSize: "24px",
    fontWeight: "600",
  },
  emailInput: {
    width: "66%",
    textAlign: "center",
    outline: "none",
    padding: "12px",
    borderRadius: "12px",
    border: "2px solid #7a39e0",
  },
  bottomText: {
    position: "absolute",
    width: "100%",
    top: "60%",
    color: "#7a39e0",
    fontSize: "24px",
    fontWeight: "600",
  },
  loadingDiv: {
    position: "absolute",
    height: "100%",
    width: "100%",
    textAlign: "center",
    backgroundColor: "white",
  },
  loadingIcon: {
    color: "#7a39e0",
    position: "absolute",
    top: "calc(50% - 51px)",
    left: "calc(50% - 51px)",
    fontWeight: "600",
  },
  chatEngineWindow: {
    width: "100%",
    backgroundColor: "#fff",
  },
};
