import React, { useState } from "react";
import Link from "next/link";
import { Modal, Button } from "react-bootstrap";

const MobileHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          Menu
          <ul>
            <li>
              <Link href="/">
                <a href="/">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/lessons">
                <a href="/lessons">Lessons</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a href="/">Home</a>
              </Link>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MobileHeader;
