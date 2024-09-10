import { ModalProvider } from '@/context/modal-context';
import { ResultsProvider } from '@/context/results-context';
import DefaultLayout from '@/ui/layouts/default-layout';

export default function ConfiguracoesLayout({
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
