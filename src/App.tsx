import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { EntityImagesPage } from '@/pages/EntityImagesPage';
import { LiveryLanePage } from '@/pages/LiveryLanePage';
import { DiasporaBallPage } from '@/pages/DiasporaBallPage';
import { PressMediaPage } from '@/pages/PressMediaPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/entity-images" element={<EntityImagesPage />} />
          <Route path="/liverylane" element={<LiveryLanePage />} />
          <Route path="/diaspora-ball" element={<DiasporaBallPage />} />
          <Route path="/press-media" element={<PressMediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
