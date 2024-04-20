import { Button } from '@nextui-org/react';

import { GithubIconBrand } from '@/assets/icons/brand/github';
import { LinkedInIconBrand } from '@/assets/icons/brand/linkedIn';
import { MailIcon } from '@/assets/icons/mail';

export function ContactButtons() {
  return (
    <nav className="flex gap-4 mt-8 flex-wrap justify-center flex-none">
      <Button as="a" href="https://linkedin.com/in/fvcoder">
        <LinkedInIconBrand className="size-4 md:size-6" />
        LinkedIn
      </Button>
      <Button as="a" href="https://github.com/fvcoder">
        <GithubIconBrand className="size-4 md:size-6" />
        GitHub
      </Button>
      <Button as="a" href="mailto:fvcoder1@gmail.com">
        <MailIcon className="size-4 md:size-6" />
        fvcoder1@gmail.com
      </Button>
    </nav>
  );
}
