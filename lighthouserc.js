module.exports = {
  ci: {
    collect: {
      url: ['https://www.rcwilley.com/'],
      numberOfRuns: 3,
      settings: {
        chromeFlags: ['--no-sandbox --disable-dev-shm-usage']
      }
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }]
      }
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-report'
    }
  }
};
