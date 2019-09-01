import React from 'react';
import { buildGithubIssue } from '../helpers';

export default () => (
  <div className='footer'>
    <div className='content-container'>
      <div className='footer__top flex-spread'>
        <div className='flex'>
          <div className='footer__contributors'>
            <a target='_blank' href={buildGithubIssue}>
              <span>Submit a hackathon</span>
            </a>
          </div>
          <div>
            <a
              className='footer__social-icon footer__social-icon_github'
              target='_blank'
              href={buildGithubIssue}
            />
          </div>
        </div>
      </div>
      <div className='footer__bottom flex-spread'>
        <div>
          <span>Hackathon Badges &copy; {new Date().getFullYear()}</span>
        </div>
        <div>
          <span>
            Created by{' '}
            <a
              className='kogg-website'
              href='https://github.com/abranhe'
              target='_blank'>
              @abranhe
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
);
