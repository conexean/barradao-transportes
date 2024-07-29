const Loading = () => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
      <div className='size-12 animate-spin rounded-full border-[3.5px] border-b-blue-500' />
    </div>
  );
};

export default Loading;
