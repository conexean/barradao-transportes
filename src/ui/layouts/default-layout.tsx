import Container from '@/ui/components/container';
import Main from '@/ui/components/main';
import Navbar from '@/ui/components/navbar';
import Section from '@/ui/components/section';
import ShowUserName from '@/ui/components/show-username';
import Sidebar from '@/ui/components/sidebar';
import { AvtiveProvider } from '@/context/active-context';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative h-screen w-screen overflow-y-auto bg-gray-100'>
      <AvtiveProvider>
        <header>
          <Navbar />
        </header>
        <Sidebar>
          <ShowUserName />
        </Sidebar>
        <Main>
          <Section>{children}</Section>
        </Main>
      </AvtiveProvider>
    </div>
  );
}
