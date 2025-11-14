const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-border">
      <div className="max-container py-12">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Chandu D</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              MERN Developer | Cloud & IoT Enthusiast | AI Innovator
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Chandu D. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;