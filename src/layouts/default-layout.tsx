import Container from '@/components/container';
import Main from '@/components/main';
import Navbar from '@/components/navbar';
import Section from '@/components/section';
import ShowUserName from '@/components/show-username';
import Sidebar from '@/components/sidebar';
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
          <Section>
            <Container>{children}</Container>
          </Section>
        </Main>
      </AvtiveProvider>
    </div>
  );
}
