export default function b() {
  return (
    <>
      <div className="test">b页面</div>
      <style jsx global>
        {`
          .test {
            color: red;
          }
        `}
      </style>
    </>
  );
}
