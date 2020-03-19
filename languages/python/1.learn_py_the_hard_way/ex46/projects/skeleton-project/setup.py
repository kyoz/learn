try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

config = {
    'description': 'Skeleton Example Project',
    'author': 'Kyoz',
    'url': 'https://url-to-get-it',
    'download_url': 'https://link-to-download-it',
    'author_email': 'banminkyoz@gmail.com',
    'version': '0.1',
    'install_requires': ['nose'],
    'packages': ['NAME'],
    'scripts': [],
    'name': 'skeleton-example-pj'
}

setup(**config)
