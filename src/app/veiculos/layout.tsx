import { ModalProvider } from '@/context/modal-context';
import { ResultsProvider } from '@/context/results-context';
import DefaultLayout from '@/layouts/default-layout';

export default function VeiculosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultLayout>
      <ModalProvider>
        <ResultsProvider>{children}</ResultsProvider>
      </ModalProvider>
    </DefaultLayout>
  );
}
