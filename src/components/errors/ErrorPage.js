import MainStructure from "../MainStructure";
export default function ErrorPage() {
  return (
    <>
      <MainStructure>
        <h1>Oops!</h1>
        <div>An error has occurred.</div>
        <div>
          Please refresh your page and try again. If this continues to happen
          please contact{" "}
          <a href="mailto:support@salvit.com">support@salvit.com</a>.
        </div>
      </MainStructure>
    </>
  );
}
