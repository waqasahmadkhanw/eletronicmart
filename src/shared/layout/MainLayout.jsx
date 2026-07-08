import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import PageContainer from "./PageContainer";
import BackToTop from "../../modules/public/components/Common/BackToTop";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Main Content */}
      <main className="flex-1">
        <PageContainer>
          <Outlet />
        </PageContainer>
      </main>

      {/* Footer */}
      <Footer />
         <BackToTop />
    </div>
  );
};

export default MainLayout;