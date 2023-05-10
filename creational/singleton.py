"""
Singleton pattern in Python.
"""

from abc import ABC, abstractmethod


class Singleton(ABC):

    _instance = None

    @abstractmethod
    def __init__(self):
        pass

    @classmethod
    def get_instance(cls):
        if not cls._instance:
            cls._instance = cls()
        return cls._instance
    
    @classmethod
    def delete_instance(cls):
        cls._instance = None
    

class Myclass(Singleton):

    def __init__(self):
        print("Myclass created")
    
    def __del__(self):
        print("Myclass deleted")


def main():
    # Create object
    obj1 = Myclass.get_instance()
    obj2 = Myclass.get_instance()

    # Delete object
    del obj1
    del obj2

    # Create object again
    obj3 = Myclass.get_instance()
    obj4 = Myclass.get_instance()

    # Delete object
    del obj3
    del obj4

    # Delete instance
    Myclass.delete_instance()


if __name__ == "__main__":
    main()